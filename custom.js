var parentElement = document.createElement("form");
parentElement.setAttribute('method', 'post');
parentElement.setAttribute('action', 'submit.php');
parentElement.setAttribute('class', 'col-md-4');


$.getJSON("config.json", function (data) {
    $.each(data, function (index, value) {

        var childElement = document.createElement(value.input);
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                switch(key){
                    case 'options' : {
                        for (var optionValue in value[key]) {
                            if (value[key].hasOwnProperty(optionValue)) {
                                var op = new Option();
                                op.value = optionValue;
                                op.text = value[key][optionValue]
                                childElement.options.add(op);
                            }
                        }
                    }break;

                    case 'htmlText' : {
                        childElement.innerHTML = value[key];
                    }break;

                    case 'radioButton' : {
                        childElement.innerHTML = value[key];
                    }break;

                    default: {
                        childElement.setAttribute(key, value[key]);
                    }
                }
            }
        }

        parentElement.appendChild(childElement);

    });
});

$(".custom-form").append(parentElement);
document.getElementsByClassName('custom-form')[0].appendChild(parentElement);