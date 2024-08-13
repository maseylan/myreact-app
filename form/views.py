from django.shortcuts import render
from .forms import tempform

# Create your views here.
def index(request):
    if request.method == "POST":
        
        form = tempform(request.POST)
        if form.is_valid():
            first_name = form.cleaned_data["first_name"]
            last_name = form.cleaned_data["last_name"]
            email = form.cleaned_data["email"]
            date = form.cleaned_data["date"]
            status = form.cleaned_data["status"]
            print(first_name)
        
    return render(request, "index.html")