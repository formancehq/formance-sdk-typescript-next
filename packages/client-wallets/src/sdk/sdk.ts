/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { info } from "../funcs/info.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Balances } from "./balances.js";
import { Holds } from "./holds.js";
import { Wallets } from "./wallets.js";

export class WalletsClient extends ClientSDK {
    private _holds?: Holds;
    get holds(): Holds {
        return (this._holds ??= new Holds(this.options$));
    }

    private _wallets?: Wallets;
    get wallets(): Wallets {
        return (this._wallets ??= new Wallets(this.options$));
    }

    private _balances?: Balances;
    get balances(): Balances {
        return (this._balances ??= new Balances(this.options$));
    }

    async info(options?: RequestOptions): Promise<components.ServerInfo> {
        return unwrapAsync(info(this, options));
    }
}
