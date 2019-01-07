export default function zipProperty (proto, toolsBag) {
  return Object.entries(toolsBag).reduce((a, [key, value]) => Object.defineProperty(
    a,
    key,
    { value,'enumerable': true }
  ), proto)
}