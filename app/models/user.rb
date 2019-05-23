# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
    validates :username, presence: :true, uniqueness:true

    has_many :created_tasks, class_name: :Task, foreign_key: :creator_id
    has_many :assigned_tasks, class_name: :Task, foreign_key: :assignee_id

end
