/**
 * 모든 Todo를 가져온다.
 * @callback getTodos
 * @returns {Promise<Todo[]>}
 */
type GetTodos = () => Promise<Todo[]>;
// export const getTodos = () => {};

/**
 * 특정 Todo를 가져온다.
 * @callback getTodoById
 * @param {number} id - 가져올 Todo 아이디
 * @returns {Promise<Todo>} - ID에 해당하는 Todo
 */
type GetTodoById = (id: number) => Promise<Todo>;
// export const getTodoById = () => {};

/**
 * 새로운 Todo를 생성한다.
 * @callback createTodo
 * @param {Object} body - 생성할 Todo 정보
 * @param {string} body.content - Todo 내용
 * @param {string} body.category - Todo 카테고리
 * @param {Tag[] | undefined} [body.tags] - Todo 태그들
 * @returns {Promise<Todo>} - 생성된 Todo
 */
type CreateTodo = (body: {
  content: string;
  category: string;
  tags?: Tag[];
}) => Promise<Todo>;
// export const createTodo = () => {};

/**
 * 특정 Todo를 수정한다.
 * @callback updateTodo
 * @param {number} id - 수정할 Todo 아이디
 * @param {Object} body - 수정할 Todo 정보
 * @param {string} body.content - Todo 내용
 * @param {boolean} body.completed - Todo 완료여부
 * @param {string} body.category - Todo 카테고리
 * @param {Tag[] | undefined} [body.tags] - Todo 태그들
 * @returns {Promise<Todo>} - 수정된 Todo
 */
type UpdateTodo = (
  id: number,
  body: {
    content: string;
    completed: boolean;
    category: string;
    tags?: Tag[];
  }
) => Promise<Todo>;
// export const updateTodo = () => {};

/**
 * 모든 Todo를 삭제한다.
 * @callback deleteTodos
 * @returns {Promise<void>}
 */
type DeleteTodos = () => Promise<void>;
// export const deleteTodos = () => {};

/**
 * 특정 Todo를 삭제한다.
 * @callback deleteTodoById
 * @param {number} id - 삭제할 Todo 아이디
 * @return {Promise<void>}
 */
type DeleteTodoById = (id: number) => Promise<void>;
// export const deleteTodoById = () => {};

/**
 * 특정 Todo의 모든 태그를 삭제한다.
 * @callback deleteTodoTags
 * @param {number} id - 삭제할 Todo 아이디
 * @returns {Promise<void>}
 */
type DeleteTodoTags = (id: number) => Promise<void>;
// export const deleteTodoTags = () => {};

/**
 * 특정 Todo의 특정 태그를 삭제한다.
 * @callback deleteTodoTagById
 * @param {number} id - 삭제할 Todo 아이디
 * @param {number} tagId - 삭제할 tag 아이디
 * @returns {Promise<void>}
 */
type DeleteTodoTagById = (id: number, tagId: number) => Promise<void>;
// export const deleteTodoTagById = () => {};
