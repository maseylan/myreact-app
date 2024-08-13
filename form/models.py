from django.db import models

# Create your models here.
class Form(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    date = models.DateField()
    status = models.CharField(max_length=50)
    option = models.CharField(max_length=50)
    tahun = models.DateField()
    bulan = models.DateField()
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
    