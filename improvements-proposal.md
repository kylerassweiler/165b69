## Questions

1 - Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

A: I would call the API using an async function inside a useEffect hook to allow the site to run smoothly while waiting on the data. The data would also go into either the state or the reducer if using redux.

2 - Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

A: React requires stable keys across server and client for it's own optimisations and the [nanoid documentation](https://github.com/ai/nanoid#react) specifically states that it should not be used for keys.
