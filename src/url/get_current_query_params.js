import parseQueryParamStr from './parse_query_param_str';


/**
 * Get the current url's query params as an object.
 *
 * Allows you to specify a `transform` function that will be invoked on each of the parameter's keys
 * before being returned. By default this is `camelcase`, so all parameters returned will have camel
 * case keys (ie. ?page_size=10 will be returned as { pageSize: 10 }).
 *
 * @param  {function} [transform] Transform function for each of the param keys
 * @return {object}               Query params dictionary
 */
export default function getCurrentQueryParams(transform) {
    return parseQueryParamStr(window.location.search, transform);
}
