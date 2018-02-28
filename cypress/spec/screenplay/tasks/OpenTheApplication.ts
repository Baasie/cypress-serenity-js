import {PerformsTasks, Task} from '@serenity-js/core/lib/screenplay';
import {Visit} from '../interaction/Visit';
import {Click} from '../interaction/Click';


export class OpenTheApplication implements Task {

    static on = (uri: string) => new OpenTheApplication(uri);

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Visit.browserOn(this.uri)
        )
    }

    constructor(private uri: string) {
    }

    toString = () => `{0} Opens the application on ${this.uri}`;
}

export const ClickOnButton = () => Task.where(`#actor opens the application`,
    Click.on('16'),
    Click.on('23'),
    Click.on('20')
);