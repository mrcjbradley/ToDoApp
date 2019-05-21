# To Do App

## Schema
### tasks table
column name | datatype | details
------------|----------|--------
task        | string   |`null:false`
completed   | boolean  | default to false
creator_id  | integer  |`null:false`
assignee_id | integer  |`null:false` [default to creator_id]
due_date    | datetime |`null:false` <!--Maybe null:true ??? -->
created_at  | datetime | 
updated_at  | datetime |

- `belongs_to :creator`
- `belongs_to :assignee`

### users table
column name | datatype | details
------------|----------|--------
username    | string   | `null:false`; unique
created_at  | datetime | 
updated_at  | datetime |

- `has_many :created_tasks`
- `has_many :assigned_tasks`
- indexed on username