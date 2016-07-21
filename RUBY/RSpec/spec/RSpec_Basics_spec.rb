# require 'rspec'
# require 'spec_helper'

# テスト対照クラス
class User
  def initialize(name:, age:)
    @name = name
    @age = age
  end
  def greet
    if @age <= 12
      "#{@name}."
    else
      "I'm #{@name}."
    end
  end
end

# describeでテストグループを宣言
describe 'Calculate sample' do

  # itでテスト単位をまとめる。
  # 「〜でないとならない」等、仕様を記述する。
  # "example"のパターンを並べていく、という形になる。
  it '1+1 should be 2' do
    expect(1 + 1).to eq 2
  end

  # 複数パターンを上げるケース
  it '10-1 should be 9' do
    expect(10 - 1).to eq 9
  end
end

# 基本：contextとbeforeを使う
describe 'User Class' do
  describe '#greet' do

    # beforeブロックは、実行前の共通処理やデータセットアップ等を行う
    before do

      # 使い回す変数はbefore１箇所で定義
      # インスタンス変数を使う。
      # →beforeブロックとitブロックは変数のスコープが異なるため。
      @params = { name: 'Taro'}
    end

    # contextはdescribeと働きは同じだが、
    # コンテキストが違うケース群＝条件が異なるグループを作る際にあえて使うと読みやすい
    context 'when 12 or younger' do
      it 'greets by word' do
        user = User.new(@params.merge(age: 12))
        expect(user.greet).to eq 'Taro.'
      end
    end
    context 'when 13 or older' do
      it 'greets in sentence' do
        user = User.new(@params.merge(age: 13))
        expect(user.greet).to eq "I'm Taro."
      end
    end
  end
end

# Tips：インスタンス変数のかわりにletを使う
describe 'User Class' do
  describe '#greet' do
    # letで変数宣言
    let(:params){{name:'Taro'}}
=begin
    ↑'{{}}'の内側ブラケットはハッシュリテラル
    ↓の処理と等価。
    let(:params) do
      hash = {}
      hash[:name] = 'Taro'
      hash
    end
=end
=begin
    before do
      #@params = { name: 'Taro'}
    end
=end
    context 'when 12 or younger' do
      before do
        params.merge!(age:12)
      end
      it 'greets by word' do
        # user = User.new(@params.merge(age: 12))
        user = User.new(params)
        expect(user.greet).to eq 'Taro.'
      end
    end
    context 'when 13 or older' do
      before do
        params.merge!(age:13)
      end
      it 'greets in sentence' do
        # user = User.new(@params.merge(age: 13))
        user = User.new(params)
        expect(user.greet).to eq "I'm Taro."
      end
    end
  end
end