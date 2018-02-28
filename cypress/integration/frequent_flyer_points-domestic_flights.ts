import {serenity} from '@serenity-js/core/lib';
import {Travellers} from '../spec/screenplay/travellers';
import {ClickOnButton, OpenTheApplication} from '../spec/screenplay/tasks/OpenTheApplication';
import {stageTheActorCalledAttemptsTo, stageTheActorInTheSpotlightAttemptsTo} from '../support/SerenityCypress';

describe('Serenity', () => {

    const stage = serenity.callToStageFor(new Travellers());

    describe('Should test', () => {

        beforeEach(() => stageTheActorCalledAttemptsTo(stage, 'James', OpenTheApplication.on('/events')))

        it('and do spotlight', () => {
            stageTheActorInTheSpotlightAttemptsTo(stage, ClickOnButton());
        });

    });
});