import maskit from './maskit'
import dynamicMask from './dynamic-mask'
import defaultTokens from './tokens'

// Facade to maskit/dynamicMask when mask is String or Array
export default function (value, mask, masked = true, tokens = defaultTokens) {
  return Array.isArray(mask)
         ? dynamicMask(maskit, mask, tokens)(value, mask, masked, tokens)
         : maskit(value, mask, masked, tokens)
}
