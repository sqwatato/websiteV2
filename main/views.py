from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.utils import timezone
from .models import *
from .forms import *
from django.conf import settings
from django.core.mail import send_mail
from django.http import JsonResponse



def index(request):
    if request.method == 'POST':
        # Get the attributes name, email, subject, and message from the post request and create a new Contact object
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        try:
            email_subject = f'Website Message'
            email_message = f'Name: {name}\nEmail: {email}\nSubject: {subject}\n\nMessage:\n{message}'
            send_mail(email_subject, email_message, settings.CONTACT_EMAIL, settings.ADMIN_EMAILS)
            return JsonResponse({'success':True, 'subject':email_subject,'message':email_message}, safe=False)
            
        except:
            data = {'success':False}
            return JsonResponse(data, safe=False)

    projects = Project.objects.all().order_by('date')
    details = []
    for i, project in enumerate(projects):
        top, left = divmod(i, 3)
        top = top * 285.484
        left = left * 33.3319
        string = ""
        tag = project.tags.all()
        for s in tag:
            string += s.name + " "
        details.append((project, top, left, string))
            
            
    tags = ProjectTag.objects.all().order_by('name')
    
    return render(request, "main/index.html", {
        "details": details,
        "tags": tags,
    })

def project_page(request, slug): 
    return render(request, "main/project_page.html", {
        "project": Project.objects.get(slug = slug)
    })

def pinball(request):
    return render(request, "main/pinball.html")
        



# def login_view(request):
#     if request.method == "POST":

#         # Attempt to sign user in
#         username = request.POST["username"]
#         password = request.POST["password"]
#         user = authenticate(request, username=username, password=password)

#         # Check if authentication successful
#         if user is not None:
#             login(request, user)
#             return HttpResponseRedirect(reverse("index"))
#         else:
#             return render(request, "auctions/login.html", {
#                 "message": "Invalid username and/or password."
#             })
#     else:
#         return render(request, "auctions/login.html")


# def logout_view(request):
#     logout(request)
#     return HttpResponseRedirect(reverse("index"))


# def register(request):
#     if request.method == "POST":
#         username = request.POST["username"]
#         email = request.POST["email"]

#         # Ensure password matches confirmation
#         password = request.POST["password"]
#         confirmation = request.POST["confirmation"]
#         if password != confirmation:
#             return render(request, "auctions/register.html", {
#                 "message": "Passwords must match."
#             })

#         # Attempt to create new user
#         try:
#             user = User.objects.create_user(username, email, password)
#             user.save()
#         except IntegrityError:
#             return render(request, "auctions/register.html", {
#                 "message": "Username already taken."
#             })
#         login(request, user)
#         return HttpResponseRedirect(reverse("index"))
#     else:
#         return render(request, "auctions/register.html")
