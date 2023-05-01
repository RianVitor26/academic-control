defmodule HelloWorld do
  def hello(name) do
    "Hello, #{name}!"
  end
end

IO.puts HelloWorld.hello("world")
