# Change log

I have decided to structured the folder in currect setup. In this setup, the folder 

- `common` supposed to contain all constants, assets and localization files.

- `components` supposed to contain all the reusable components with their respective stylesheets and tests

- `helpers` supposed to contain some helper functions. In this case it contains `fetchData` function for fetching data from the remote server.

- `hooks` supposed to decouple the logics from the react components.

- `screens` supposed to contain all the screens that the app renders

- `utils` contains all utility functions

I have also updated the `public/index.html` to add bootstrap css link. And I have also updated `.babelrc` as it was making some issues while fetching data from the server.


## Missing
I could not finish writing all the unit tests as I intended due to lack of time. With sufficient time, I would prefer to write test with 100% coverage.