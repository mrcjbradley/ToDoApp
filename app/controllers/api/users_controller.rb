class Api::UsersController < ApplicationController

    def index
        @users = User.all
    end

    def show
        @user = User.find(params[:id])
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render :show
        else
            render json: @user.errors.full_messages
        end
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages
        end 
    end

    def delete
        @user = User.find(params[:id])
        render :index
    end

    def user_params
        params.require(:user).permit(:username)
    end

end
