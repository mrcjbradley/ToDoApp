class Api::TasksController < ApplicationController
    def show
        @task = Task.find(params[:id])
    end

    def index
        @tasks = Task.all
    end

    def create
        @task = Task.new(task_params)
        if @task.save
            render :show
        else
            render json: @task.errors.full_messages
        end
    end

    def update
        @task = Task.find(params[:id])
        if @task.update(task_params)
            render :show
        else
            render json: @task.errors.full_messages
        end
    end

    def destroy
        @task = Task.find(params[:id])
        if @task
            @task.destroy
            render json: { taskId: @task.id }
        else
            render json: @task.errors.full_messages
        end
    end

    def task_params
        params.require(:task).permit(:task_name, :parent_task_id, :completed, :creator_id, :assignee_id, :due_date)
    end
end
