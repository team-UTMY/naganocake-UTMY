class Admin::ItemsController < ApplicationController
  def index
     @items = Item.page(params[:page])
  end

  def new
    @item = Item.new
  end

  def show
    @items = Item.find(params[:id])
  end

  def edit
    @items = Item.find(params[:id])
  end

  def create
    @item = Item.new(item_params)
    if @item.save
    redirect_to admin_item_path(@item.id)
    else
    @items = Item.all
    render :new
    end
  end

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
     redirect_to admin_item_path(@item.id)
    else
     @items = Item.all
     render :edit
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :image, :introduction, :price, :is_sale_status, :genre_id)
  end

end
