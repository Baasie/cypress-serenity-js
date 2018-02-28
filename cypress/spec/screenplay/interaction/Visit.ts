import { Interaction, UsesAbilities } from '@serenity-js/core/lib/screenplay';

import { BrowseTheWeb } from '../abilities/browse_the_web';

export class Visit implements Interaction {

    static browserOn = (website: string) => new Visit(website);

    performAs(actor: UsesAbilities): PromiseLike<void> {
        return BrowseTheWeb.as(actor).visit(this.targetWebsite);
    }

    constructor(private targetWebsite: string) { }

    toString = () => `#actor opens the browser at "${this.targetWebsite}"`;
}