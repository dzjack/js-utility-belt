import filterFromObject from './private/filter_from_object';


/**
 * Similar to lodash's _.omit(), this returns a copy of the given object's
 * own and inherited enumerable properties, omitting any keys that are
 * in the given array or whose value pass the given filter function.
 * @param  {object}         obj    Source object
 * @param  {array|function} filter Array of key names to omit or function to invoke per iteration
 * @return {object}                The new object
 */
export default function omitFromObject(obj, filter) {
    return filterFromObject(obj, filter, { isInclusion: false });
}
