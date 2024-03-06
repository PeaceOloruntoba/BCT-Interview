def validate_password(password):
    if len(password) < 8:
        return False
    if len(password) > 16:
      return False
    if not any(char.isupper() for char in password):
        return False
    if not any(char.isdigit() for char in password):
        return False
    special_characters = "!@#$%^&*()-_=+[{]}\|;:'\",<.>/?"
    if not any(char in special_characters for char in password):
        return False
    return True

intro = '''
Python Password Validator
Please note that for a password to be valid
- it should have a minimum of 8 characters and a maximum of 16 characters.
- it should contain at least one uppercase character, one lowercase character, a digit, and a special character.
'''

print(intro)
password = input("Enter your password: ")
if validate_password(password):
  print("Password is valid.")
else:
    print("Password is not valid. Please ensure it meets the criteria.")
