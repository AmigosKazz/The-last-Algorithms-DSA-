export default function linear_search(haystack :number[], neeadle :number) :boolean {
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === neeadle) {
            return true;
        }
    }

    return false;
}