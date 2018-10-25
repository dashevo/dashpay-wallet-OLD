/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import "../shim.js";
import crypto from "crypto";
import stream from "stream";

import { COLORS } from "constants";
import { registerRoutes } from "navigation";
import { registerLaunch } from "navigation";
import { setDefaultOptions } from "navigation";
import { setRoot } from "navigation";
import routes from "./routes";

function app() {
  registerRoutes(routes);
  registerLaunch(async () => {
    setDefaultOptions({
      statusBar: {
        style: "light",
        backgroundColor: "#011E60"
      },
      layout: {
        orientation: ["portrait"],
        backgroundColor: COLORS.blue
      },
      topBar: {
        visible: false,
        animate: false,
        height: 0
      }
    });
    setRoot({
      root: {
        stack: {
          id: "DashPay",
          children: [
            {
              component: {
                name: "SplashScreen"
              }
            }
          ]
        }
      }
    });
  });
}

export default app;
