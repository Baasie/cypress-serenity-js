import {Stage} from '@serenity-js/core/lib/stage';
import {Activity} from '@serenity-js/core/lib/screenplay/activities';

export function stageTheActorCalledAttemptsTo(stage: Stage, actor: string, ...activities: Activity[]): Cypress.Chainable {
    return cy.then(() => new Cypress.Promise((resolve, reject) => stage.theActorCalled(actor).attemptsTo(
        ...activities,
    ).then(resolved => resolve(), rejected => reject(rejected))));
}

export function stageTheActorInTheSpotlightAttemptsTo(stage: Stage, ...activities: Activity[]): Cypress.Chainable {
    return cy.then(() => new Cypress.Promise((resolve, reject) => stage.theActorInTheSpotlight().attemptsTo(
        ...activities,
    ).then(resolved => resolve(), rejected => reject(rejected))));
}