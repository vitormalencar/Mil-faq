json.array!(@problemas) do |problema|
  json.extract! problema, :id, :descricao, :resposta, :status, :relator
  json.url problema_url(problema, format: :json)
end
