# To Do App

## Schema
### tasks table
column name | datatype | details
------------|----------|--------
id          | integer  |`null:false`
task_name   | string   |`null:false`
description | text     | `null:true` <!-- Maybe have student add this to migration -->
parent_task_id | integer | `null: true`
completed   | boolean  | default to false
creator_id  | integer  |`null:false`
assignee_id | integer  |`null:false` [default to creator_id]
due_date    | datetime |`null:false` <!-- Maybe null:true ??? -->
created_at  | datetime | 
updated_at  | datetime |

- `belongs_to :creator`
- `belongs_to :assignee`
- `belongs_to :parent_task, class: :Task, foreign_key: :parent_task_id`

### users table
column name | datatype | details
------------|----------|--------
id          | integer  |`null:false`
username    | string   | `null:false`; unique
created_at  | datetime | 
updated_at  | datetime |

- `has_many :created_tasks`
- `has_many :assigned_tasks`
- indexed on `username`