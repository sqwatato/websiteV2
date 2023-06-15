# # from django.forms import ModelForm
# from django import forms
# from .models import Contact

# class ContactForm(forms.ModelForm):
#     name = forms.CharField(max_length=255)
#     email = forms.EmailField()
#     subject = forms.CharField(max_length=255)
#     message = forms.CharField(widget=forms.Textarea)
#     # class Meta:
#     #     model = Contact
#     #     fields = '__all__'
#     #     widgets = {
#     #         'name': forms.TextInput(
#     #             attrs={'id': 'name', 'required': True, 'placeholder': 'Name*', 'name': 'name', 'class': 'form-control'}
#     #         ),
#     #         'email': forms.TextInput(
#     #             attrs={'id': 'email', 'required': True, 'placeholder': 'Email*', 'name': 'email', 'class': 'form-control'}
#     #         ),
#     #         'subject': forms.TextInput(
#     #             attrs={'id': 'subject', 'required': True, 'placeholder': 'Subject', 'name': 'subject', 'class': 'form-control'}
#     #         ),
#     #         'message': forms.TextInput(
#     #             attrs={'id': 'comment', 'required': True, 'placeholder': 'Message', 'class': 'form-control', 'rows': '8'}
#     #         ),
#     #     }