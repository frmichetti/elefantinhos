
vezes = 1
qtd = 1
loop do
    sleep(1)
    if qtd == 1 
        puts("#{qtd} elefante incomoda muita gente!")
    else 
        if qtd % 2 == 0
            incomoda = ""
            i = 0
            for i in i..vezes do
                incomoda += "incomodam "
            end
            puts("#{qtd} elefantes #{incomoda}muito mais!")
        else 
            puts("#{qtd} elefantes incomodam muita gente!")
        end   
    end
    qtd+=1
    vezes+=1
end