## Questions

1 - Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

A: I would call the API using an async function inside a useEffect hook to allow the site to run smoothly while waiting on the data. The data would also go into either the state or the reducer if using redux.

2 - Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

A: React requires stable keys across server and client for it's own optimisations and the [nanoid documentation](https://github.com/ai/nanoid#react) specifically states that it should not be used for keys.

3 - How could you improve your current solution if the number of blog posts was really large (for example 10,000)?

A: Not pull in all the data and filter client side, and use built in filtering on the api or database side.

4 - What are additional features you would consider adding now that the data is being requested from an API?

A: For the app itself - a functional search feature maybe? For the added pagination - Maybe an option to view all items, all 10,000 on one page with lazy loading.