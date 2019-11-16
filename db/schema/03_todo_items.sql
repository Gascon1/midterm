-- Drop and recreate todo_items table (Example)

DROP TABLE IF EXISTS todo_items CASCADE;
CREATE TABLE todo_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  is_completed BOOLEAN,
  category_id REFERENCES categories(id) ON DELETE CASCADE,
  user_id REFERENCES users(id)
);
