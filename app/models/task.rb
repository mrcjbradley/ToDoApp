# == Schema Information
#
# Table name: tasks
#
#  id             :bigint           not null, primary key
#  task_name      :string           not null
#  parent_task_id :integer
#  completed      :boolean
#  creator_id     :integer          not null
#  assignee_id    :integer          not null
#  due_date       :datetime         not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Task < ApplicationRecord
    validates :task_name, :creator_id, :assignee_id, :due_date, presence: true
    validates :completed, inclusion: {in: [true, false]}

    belongs_to :creator, class_name: :User, foreign_key: :creator_id
    belongs_to :assignee, class_name: :User, foreign_key: :assignee_id
    belongs_to :parent_task, class_name: :Task, foreign_key: :parent_task_id, optional: true 
    has_many :sub_tasks, class_name: :Task, foreign_key: :parent_task_id, primary_key: :id, inverse_of: :parent_task
end
