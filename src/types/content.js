/**
 * @typedef {Object} NavigationItem
 * @property {string} href
 * @property {boolean} isActive
 * @property {string} label
 */

/**
 * @typedef {Object} WorkDetail
 * @property {string} dimensions
 * @property {string} heroEyebrow
 * @property {string} intro
 * @property {string} location
 * @property {string} medium
 * @property {string[]} notes
 * @property {string} narrative
 * @property {number[]} relatedIds
 * @property {string} year
 */

/**
 * @typedef {Object} Work
 * @property {string} category
 * @property {'hero' | 'split-right'} detailLayout
 * @property {WorkDetail} detail
 * @property {string} description
 * @property {number} id
 * @property {string} palette
 * @property {'landscape' | 'portrait' | 'square'} size
 * @property {string} slug
 * @property {string} title
 */

export {};
