import { Actor } from '@serenity-js/core/lib/screenplay'
import { Cast} from '@serenity-js/core/lib/stage';
import { BrowseTheWeb } from './abilities/browse_the_web';


export class Travellers implements Cast {
    actor(name: string): Actor {
        return Actor.named(name).whoCan(BrowseTheWeb.usingCypress());
    }
}