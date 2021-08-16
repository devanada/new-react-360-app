// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from "react-360-web";
import SimpleRaycaster from "simple-raycaster";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const cylinderSurface = new Surface(
    4080 /* width */,
    1200 /* height */,
    Surface.SurfaceShape.Cylinder /* shape */
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot("react-virtual-tour"),
    // cylinderSurface
    r360.getDefaultSurface()
  );

  const screenSurface = new Surface(800, 400, Surface.SurfaceShape.Flat);
  screenSurface.setAngle(-3.3 /* yaw angle */, 0 /* pitch angle */);

  r360.renderToSurface(r360.createRoot("react-virtual-tour"), screenSurface);

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("360_world.jpg"));
  r360.controls.clearRaycasters();
  r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = { init };
