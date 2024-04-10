<template>
  <section>
    <slot name="navBar"></slot>
    <div :style="`background-color: ${heroColor};`">
      <center-l class="repositories" size="wide">
        <stack-l space="var(--s2)">
          <div class="back-button" v-if="route.query && route.query.slug">
            <base-button el="a" size="m" :href="goBack()" class="button" visual="transparent" color="white"
              iconBefore="chevron_left">Back to search</base-button>
          </div>
          <slot name="headings">
            <h1 :style="`color: ${heroTextColor};`">{{ title }}</h1>
          </slot>
          <slot name="beforeSearch" v-if="!route.query || !route.query.slug"></slot>
          <div class="repositories__filters" id="search-form" v-if="!route.query || !route.query.slug">

            <div class="repositories__search-line">
              <control-group>
                <base-input type="text" name="search" placeholder="Search..." class="repositories__search-input"
                  v-model="data.filterValues.term" />
                <base-button el="button" size="l" class="button" visual="primary" color="primary" target="blank"
                  @click.prevent="filterList">Search</base-button>
              </control-group>
              <base-button el="button" size="l" class="button" visual="secondary" color="white" target="blank"
                @click.prevent="resetForm">Reset</base-button>
            </div>

            <div class="repositories__filter-line">
              <ccm-select :name="filter.id" :id="filter.id" class="repositories__search-select"
                v-for="filter in data.filters" v-bind:key="filter.id" v-model="data.filterValues.options[filter.id]"
                @change="filterList">
                <option value="">{{ `Select: ${filter.label}` }}</option>
                <option :value="option.value" v-for="option in data.options[filter.id].choices"
                  v-bind:key="option.value" v-if="data.options[filter.id] && data.options[filter.id].choices">{{
                  option.text }}</option>
              </ccm-select>
            </div>
          </div>
          <slot name="afterSearch" v-if="!route.query || !route.query.slug"></slot>
        </stack-l>
      </center-l>
    </div>
    <div>
      <center-l size="wide">
        <stack-l space="var(--s2)">
          <div class="repositories__list | repo-list">
            <div class="repo-list__switch" v-if="!route.query || !route.query.slug"
              :class="{'repo-list__switch--right' : data.listType == 'expand'}">
              <div class="repo-list__switch-group">
                <input id="switch-coll" type="radio" value="collapse" v-model="data.listType" @change="toggleAll" />
                <label for="switch-coll">List</label>
              </div>
              <div class="repo-list__switch-group">
                <input id="switch-exp" type="radio" value="expand" v-model="data.listType" @change="toggleAll" />
                <label for="switch-exp">Description</label>
              </div>
            </div>
            <stack-l class="repo-list__table" :style="`--column-count: ${data.filters.length};`">
              <div class="repo-list__header">
                <div class="repo-list__header-item col-flex">Name</div>
                <div class="repo-list__header-item" v-for="filter in data.filters" v-bind:key="filter.id">{{
                  filter.label }}</div>
                <div class="repo-list__header-item"></div>
              </div>
              <div class="repo-list__body" :class="{'repo-list__body--expanded': !project.collapse}"
                v-for="project in data.repositories" v-bind:key="project.slug"
                @click="!route.query || !route.query.slug?project.collapse = !project.collapse: false">

                <div class="repo-list__body-item | repo-list__body-title col-flex">{{ project.name }}</div>


                <ccm-prose class="repo-list__body-item | repo-list__body-description">
                  <div v-html="project.description"></div>
                </ccm-prose>
                <div class="repo-list__body-item" v-for="filter in data.filters" v-bind:key="filter.id">
                  <ccm-chip class="repo-list__tag" v-if="project[filter.id] && project[filter.id].length === 1"
                    v-for="(i, index) in project[filter.id]" :key="i"
                    :color="(index % 3 === 0) ? 'accent' : ((index % 3 === 1) ? 'tertiary' : 'primary')">{{
                    findTagName(filter.id, i) }}</ccm-chip>

                  <ccm-chip class="repo-list__tag" v-if="project[filter.id] && project[filter.id].length >= 2"
                    v-for="(i, index) in project[filter.id]" :key="i"
                    :color="(index % 3 === 0) ? 'primary' : ((index % 3 === 1) ? 'tertiary' : 'accent')">{{
                    findTagName(filter.id, i) }}</ccm-chip>
                  <ccm-chip class="repo-list__tag | repo-list__tag--shown"
                    v-if="project[filter.id] && project[filter.id].length >= 2">
                    +{{ project[filter.id].length - 1 }}
                  </ccm-chip>
                </div>


                <base-button class="repo-list__collapse-trigger" size="l"
                  :class="{'repo-list__collapse-trigger--expanded': !project.collapse}" visual="ghost" icon-only
                  icon-before="expand_more" v-if="!route.query || !route.query.slug" />
                <div class="repo-list__actions">
                  <base-button el="a" size="m" :href="openInNewTab(project.slug)" target="_blank" class="button"
                    visual="primary" color="secondary" iconBefore="arrow_outward"
                    v-if="!route.query || !route.query.slug">Open in new tab</base-button>
                  <base-button el="a" size="m" :href="project.url" class="button" visual="primary" color="primary"
                    target="_blank" iconBefore="link">Source</base-button>
                </div>
              </div>
            </stack-l>
          </div>
        </stack-l>
      </center-l>
    </div>
  </section>
</template>

<script setup>
    import { reactive } from 'vue';
    import _ from 'lodash';
    import projectConfig from "@/project_config.json";

    const route = useRoute()
    const props = defineProps({
        title: {
            type: String,
            default: 'Repository of projects'
        },
        heroColor: {
            type: String,
            default: 'var(--secondary-color)'
        },
        heroTextColor: {
            type: String,
            default: 'var(--white-color)'
        },
        data: {
            type: Array,
            default: [
                {
                    slug: 'buenos-aires-argentina-s-facial-recognition-regulation-law-5-688',
                    name: 'Buenos Aires, Argentina`s Facial Recognition regulation (LAW 5.688)',
                    region: ['Latin America and the caribbean'],
                    focus: ['Accountability', 'Privacy'],
                    type: ['Innovation in Government'],
                    mechanism: ['Policies'],
                    description: 'The Legislature of the City of Buenos Aires has started a debate to regulate the implementation of facial recognition systems in public, introducing a bill. Since 2019, the government of Buenos Aires “has allowed the installation of a facial recognition system on 300 surveillance cameras in the city,” with systems designed to target fugitives and aid Argentinian justice authorities. “Legislators want to require the facial recognition system executing authority to transmit more information to the monitoring Committee of the Public Security System...and the Ombudsman’s Office. ... As a huge amount of video surveillance systems are installed among the country, it will be required to send information about the location of each device as well as clarifications on which of these systems are operating facial recognition software and what are the technical specifications of the facial recognition system of software used.” (Source)',
                    url: 'https://www.google.com',
                    source: 'https://www.google.com'
                },
            ]
        }
    });

    const data = reactive({
        listType: 'collapse',
        repositories: props.data,
        filters: projectConfig.filters,
        filterValues: {
            term: '',
            options: {}
        },
        options: {}
    });

    data.filters.forEach(async (filter) => {
        data.options[filter.id] = await queryContent('project-filters').where({"field":filter.id}).findOne();
    });

    if(route.query && route.query.slug) {
        data.repositories = [data.repositories.find((repo) => repo.slug === route.query.slug)]; 
    } else {
        data.repositories.forEach((repo) => {
            repo.collapse = true;
        });
    }

    const toggleAll = () => {
        data.repositories.forEach((repo) => {
            repo.collapse = data.listType === 'collapse';
        });
    }

    data.filters.forEach((filter) => {
        data.filterValues.options[filter.id] = '';
    });

    const filterList = () => {

        const sortedList = props.data.filter((repo) => {
            return Object.keys(data.filterValues.options).every((key) => {
                if(key != 'term') {
                    if (data.filterValues.options[key] === '') {
                        return true;
                    }
                    if (Array.isArray(repo[key])) {
                        return repo[key].includes(data.filterValues.options[key]);
                    }
                    return repo[key] === data.filterValues.options[key];
                }
            });
        });

        data.repositories = sortedList;
        console.log('data.repositories', data.repositories.length);

        filterTerm();
    }

    const resetForm = () => {
        data.filterValues.term = '';
        data.filters.forEach((filter) => {
            data.filterValues[filter.id] = '';
        });
        data.repositories = props.data;
    }

    const filterTerm = () => {
        const searchTerm = data.filterValues.term.toLowerCase().trim();

        if (searchTerm) {
            // Filter the repositories based on the search term
            
            const sortedList = data.repositories.filter(repo => {
                return Object.values(repo).some(value => {
                    if (typeof value === 'string' || value instanceof String) {
                        const words = value.toLowerCase().split(' ');
                        return words.some(word => word === searchTerm);
                    }
                    return false;
                });
            });

            console.log(sortedList)

            data.repositories = sortedList;
        }
    }

    const findTagName = (filterId, value) => {
        const filter = data.options[filterId];
        if (filter) {
            const choice = filter.choices.find(choice => choice.value === value);
            if (choice) {
                return choice.text;
            }
        }
        return value;
    }

    const openInNewTab = (slug) => {
        return `${route.fullPath}?slug=${slug}`;
    }

    const goBack = () => {
        return route.fullPath.split('?')[0];
    }
</script>

<style lang="scss" scoped>
    .repositories {
      padding-block: var(--s4);
     
      h1 {
        font-size: 250%;
        color: var(--base-color);
        text-align: var(--base-align);
        text-transform: var(--base-case);
      }
    }

    .repositories__filters {
        display: flex;
        flex-flow: column nowrap;
        gap: var(--s0);
    }

    .repositories__search-line,
    .repositories__filter-line {
      display: flex;
      flex-flow: row;
      gap: var(--s0);
    }
    .repositories__search-line > :first-child { flex-grow: 1; }
    .repositories__filter-line> * { flex-grow: 1; }

    .repositories__search-select {
      background-color: var(--select-bg-color);
    }

    .repo-list__switch {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        background-color: var(--secondary-color-10);
        padding: var(--s-3);
        padding-block: var(--s-2);
        width: 300px;
        border-radius: var(--border-radius);
        margin-bottom: var(--s-1);
        &::before {
            content: '';
            position: absolute;
            top: var(--s-3);
            bottom: var(--s-3);
            left: var(--s-3);
            background-color: var(--white-color);
            border-radius: var(--border-radius);
            z-index: 0;
            width: 148px;
            transition: all 0.2s ease-in-out;
        }
    }

    .repo-list__switch--right::before { left: calc(var(--s-3) + 150px); }

    .repo-list__switch-group {
        input {
            display: none;
        }
        
        label {
            display: block;
            width: 148px;
            text-align: center;
            font-size: 0.875em;
            line-height: 2em;
            font-weight: 500;
            cursor: pointer;
            position: relative;
            z-index: 1;
        }
    }

.repo-list { padding-block: var(--s2); }

    .repo-list__table {
        display: flex;
        flex-flow: column nowrap;
        gap: var(--s-2);
    }

    .repo-list__header,
    .repo-list__body {
        display: grid;
        grid-template-columns: 6fr repeat(var(--column-count), 3fr) 1fr;
    }

    .repo-list__body {
        border-bottom: 1px solid var(--secondary-color-20);
        cursor: pointer;
    }

    .repo-list__header { background-color: var(--secondary-color-10); }
    
    .repo-list__header-item {
        padding: var(--s-1) var(--s0);
        white-space: nowrap;
        max-width: 25ch;
        
        &:first-child {
          border-top-left-radius: var(--border-radius);
          border-bottom-left-radius: var(--border-radius);
        }
        &:last-child {
          border-top-right-radius: var(--border-radius);
          border-bottom-right-radius: var(--border-radius);
        }
    }
        .repo-list__body-item {
            white-space: nowrap;
            max-width: 25ch;
            padding: var(--s-1);
            display: flex;
            flex-flow: row wrap;
            align-items: flex-start;
            gap: var(--s-3);
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            // font-size: 0.875em;
            font-weight: 500;
            position: relative;
        }

        .col-flex { max-width: 45ch; }
        .repo-list__body--expanded { max-width: none !important; }

        .repo-list__tag {
          border: 0 !important;
          font-size: 90%;
          padding: var(--s-2) var(--s0) calc(var(--s-2) + 2px) var(--s0) !important;  
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;

          // &[color="primary"] {
          //     background-color: var(--primary-color-05);
          //     color: var(--primary-color);
          // }
          // &[color="accent"] {
          //     background-color: var(--accent-color-05);
          //     color: var(--accent-color);
          // }
          // &[color="tertiary"] {
          //     background-color: var(--tertiary-color-05);
          //     color: var(--tertiary-color);
          // }
          &:not(:first-child):not(.repo-list__tag--shown) {
              display: none;
          }
        }

        .repo-list__collapse-trigger {
            display: flex;
            align-items: center;
            justify-content: center;
            span {
                transition: all 0.2s ease-out;
            }
            &--expanded {
                span {
                    transform: rotateX(180deg);
                }
            }
        }

        .repo-list__body-title {
            display: block;
        }

        .repo-list__body-description {
            display: none;
            font-weight: 400;
        }

        .repo-list__actions {
            display: none;
            a {
                --button-border-radius: var(--border-radius);
            }
        }

        .repo-list__body--expanded {
            display: flex;
            flex-flow: row wrap;
            gap: var(--s0);
            position: relative;

            .repo-list__body-item {
                white-space: normal;
                max-width: 500px;   
            }

            .repo-list__body-title {
                width: 100%;
                font-size: 1.25em;
                max-width: none;
            }

            .repo-list__body-description {
                width: 100%;
                display: block;
                max-width: none;
            }

            .repo-list__collapse-trigger {
                position: absolute;
                top: var(--s-1);
                right: var(--s1);
            }

            .repo-list__tag {
                &:not(:first-child):not(.repo-list__tag--shown) { display: block; }
                &.repo-list__tag--shown { display: none; }
            }

            .repo-list__actions {
                width: 100%;
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-end;
                gap: var(--s0);
                padding-bottom: var(--s-1);
            }
        }
</style>
