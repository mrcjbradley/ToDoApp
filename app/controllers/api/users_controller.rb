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

    def destroy
        @user = User.find(params[:id])
        if @user
            @user.destroy
            render json: { userId: @user.id }
        else
            render json: @user.errors.full_messages
        end
    end

    def user_params
        params.require(:user).permit(:username)
    end

end
