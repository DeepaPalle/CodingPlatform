export const problems = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    tags: ['Array', 'Hash Map'],
    acceptance: 78,
    status: 'solved',
    statement:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input has exactly one solution, and you may not use the same element twice.',
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]' },
    ],
    constraints: ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9', 'Only one valid answer exists.'],
    starter: `function twoSum(nums, target) {
  // write your solution here
}`,
  },
  {
    id: 2,
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    tags: ['String', 'Sliding Window'],
    acceptance: 54,
    status: 'attempted',
    statement:
      'Given a string s, find the length of the longest substring without repeating characters.',
    examples: [
      { input: 's = "abcabcbb"', output: '3' },
      { input: 's = "bbbbb"', output: '1' },
    ],
    constraints: ['0 <= s.length <= 5 * 10^4', 's consists of English letters, digits, symbols and spaces.'],
    starter: `function lengthOfLongestSubstring(s) {
  // write your solution here
}`,
  },
  {
    id: 3,
    title: 'Merge K Sorted Lists',
    difficulty: 'Hard',
    tags: ['Linked List', 'Heap', 'Divide & Conquer'],
    acceptance: 46,
    status: 'unsolved',
    statement:
      'You are given an array of k linked-lists, each sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.',
    examples: [{ input: 'lists = [[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]' }],
    constraints: ['k == lists.length', '0 <= k <= 10^4', '0 <= lists[i].length <= 500'],
    starter: `function mergeKLists(lists) {
  // write your solution here
}`,
  },
  {
    id: 4,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    tags: ['Stack', 'String'],
    acceptance: 81,
    status: 'solved',
    statement:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' },
    ],
    constraints: ['1 <= s.length <= 10^4'],
    starter: `function isValid(s) {
  // write your solution here
}`,
  },
  {
    id: 5,
    title: 'Binary Tree Level Order Traversal',
    difficulty: 'Medium',
    tags: ['Tree', 'BFS'],
    acceptance: 63,
    status: 'unsolved',
    statement:
      'Given the root of a binary tree, return the level order traversal of its nodes values (i.e., from left to right, level by level).',
    examples: [{ input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]' }],
    constraints: ['The number of nodes in the tree is in the range [0, 2000].'],
    starter: `function levelOrder(root) {
  // write your solution here
}`,
  },
  {
    id: 6,
    title: 'Course Schedule',
    difficulty: 'Medium',
    tags: ['Graph', 'Topological Sort'],
    acceptance: 49,
    status: 'attempted',
    statement:
      'There are numCourses courses labeled 0 to numCourses - 1. Given prerequisites, determine if you can finish all courses.',
    examples: [{ input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true' }],
    constraints: ['1 <= numCourses <= 2000'],
    starter: `function canFinish(numCourses, prerequisites) {
  // write your solution here
}`,
  },
  {
    id: 7,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    tags: ['Array', 'Binary Search'],
    acceptance: 38,
    status: 'unsolved',
    statement:
      'Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays in O(log(m+n)) time.',
    examples: [{ input: 'nums1 = [1,3], nums2 = [2]', output: '2.0' }],
    constraints: ['nums1.length == m', 'nums2.length == n'],
    starter: `function findMedianSortedArrays(nums1, nums2) {
  // write your solution here
}`,
  },
  {
    id: 8,
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    tags: ['Dynamic Programming'],
    acceptance: 85,
    status: 'solved',
    statement:
      'You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
    examples: [{ input: 'n = 3', output: '3' }],
    constraints: ['1 <= n <= 45'],
    starter: `function climbStairs(n) {
  // write your solution here
}`,
  },
]

export const difficultyColor = {
  Easy: 'text-teal border-teal/40 bg-teal/10',
  Medium: 'text-amber border-amber/40 bg-amber/10',
  Hard: 'text-coral border-coral/40 bg-coral/10',
}

export const statusMeta = {
  solved: { label: 'Solved', color: 'bg-teal' },
  attempted: { label: 'Attempted', color: 'bg-amber' },
  unsolved: { label: 'Unsolved', color: 'bg-muted2' },
}
