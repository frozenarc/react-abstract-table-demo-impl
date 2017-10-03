# Demo implementation of [`react-abstract-table`](https://github.com/frozenarc/react-abstract-table)


* Rendering: `renderer-functions.js` represents rendering module using `semantic-ui-react`.
* Data management: `data-functions.js` represents data management module using data defined in `sample-data.js`.
* State management: `state-functions.js` represents state management module using state defined in `sample-state.js`.
* Event handling: `event-functions.js` represents event handling module.

If we work this way, you don't need change other three modules if one module need to be changed. You can see easily that each module depends on some functions of other module. As long as function names remain same the modules work perfectly.

This is not a standard implementation of modules. This is just a demo how we can achieve independency. If you want to create it differently you can do it.

Comments in code might help more.
