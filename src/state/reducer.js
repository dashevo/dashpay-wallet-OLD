/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { combineReducers } from "redux";
import settings from "./settings";
import currency from "./currency";
import language from "./language";
import user from "./user";
import rates from "./rates";
import transactions from "./transactions";

export default combineReducers({
  transactions,
  settings,
  currency,
  language,
  user,
  rates
});
