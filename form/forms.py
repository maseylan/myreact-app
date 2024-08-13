from django import forms 

class tempform(forms.Form):
    first_name = forms.CharField(max_length=50)
    last_name = forms.CharField(max_length=50)
    email = forms.EmailField()
    date = forms.DateField()
    status = forms.CharField(max_length=50)
    option = forms.CharField(max_length=50)
    
    