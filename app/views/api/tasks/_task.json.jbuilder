json.set! task.id do
    json.extract! task, :id, :task_name, :parent_task_id, :completed, :creator_id, :assignee_id, :due_date, :created_at, :updated_at
    json.subtasks = task.sub_task_ids
end