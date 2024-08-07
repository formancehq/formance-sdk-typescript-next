/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { info } from "../funcs/info.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Instances } from "./instances.js";
import { Triggers } from "./triggers.js";
import { Workflows } from "./workflows.js";

export class FlowsClient extends ClientSDK {
    private _instances?: Instances;
    get instances(): Instances {
        return (this._instances ??= new Instances(this.options$));
    }

    private _triggers?: Triggers;
    get triggers(): Triggers {
        return (this._triggers ??= new Triggers(this.options$));
    }

    private _workflows?: Workflows;
    get workflows(): Workflows {
        return (this._workflows ??= new Workflows(this.options$));
    }

    async info(options?: RequestOptions): Promise<components.ServerInfo> {
        return unwrapAsync(info(this, options));
    }
}
