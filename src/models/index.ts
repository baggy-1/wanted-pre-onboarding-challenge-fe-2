/**
 * Todo 모델
 * @typedef {Object} Todo
 * @property {number} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} completed - 완료여부
 * @property {string} category - 카테고리
 * @property {Tag[] | undefined} [tags] - 태그들
 *
 */

interface Todo {
  id: number;
  content: string;
  completed: boolean;
  category: string;
  tags?: Tag[];
}

/**
 * Tag 모델
 * @typedef {Object} Tag
 * @property {number} id - 아이디
 * @property {string} name - 태그명
 */

interface Tag {
  id: number;
  name: string;
}
