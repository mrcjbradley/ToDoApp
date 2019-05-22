class Tasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :task_name, null:false
      t.integer :parent_task_id
      t.boolean :completed
      t.integer :creator_id, null:false
      t.integer :assignee_id, null:false
      t.datetime :due_date, null:false
 
      t.timestamps
    end
  end
end
