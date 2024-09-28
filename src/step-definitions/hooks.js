import { Before } from "@wdio/cucumber-framework";

Before({ name: 'console log', tags: '@mandatoryfields' }, () => {
    return console.log('before hook');
});