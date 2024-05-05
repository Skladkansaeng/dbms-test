const longestCommonPrefix = (strs) => {
    strs.sort((a, b) => a.length - b.length)
    const commonPrefix = strs.reduce((acc, str, idx) => {
        if (idx === 0) return str
        let outputText = ''
        for (let chIndex in str) {
            if (!acc[chIndex]) break
            if (acc[chIndex] === str[chIndex]) {
                outputText += acc[chIndex]
            }
        }
        return outputText
    }, "")

    return commonPrefix
}

// Example usage:
const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1));

const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2)); 