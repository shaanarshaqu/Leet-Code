# 1347. Minimum Number of Steps to Make Two Strings Anagram
*You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.
Return the minimum number of steps to make t an anagram of s.
An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.*

### Example 1:
Input: s = "bab", t = "aba"
Output: 1
Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.

### Example 2:
Input: s = "leetcode", t = "practice"
Output: 5
Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.

### Example 3:
Input: s = "anagram", t = "mangaar"
Output: 0
Explanation: "anagram" and "mangaar" are anagrams. 

```csharp
My Solutions:

public class Solution {
    public int MinSteps(string s, string t) {
        int count=0;
        List<char> list =t.ToCharArray().ToList();
        for(int i=0;i<s.Length;i++){
            int index=list.IndexOf(s[i]);
            if(index != -1){
                list.RemoveAt(index);           
            }
            else{
                count++;
            }
        }
        return count;
    }
}
```
