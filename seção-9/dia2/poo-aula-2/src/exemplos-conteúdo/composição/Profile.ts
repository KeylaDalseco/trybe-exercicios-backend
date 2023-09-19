class Profile {
  private name!: string;
  private email!: string;

  public setName(name: string) {
    this.name = name;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public toString(): string {
    return `name - [${this.name}] - email - [${this.email}]`;
  }
}

class SocialMediaProfile {
  // Cria nossa composição com o perfil
  private profile = new Profile();

  public editProfile(name: string, email: string) {
    this.profile.setName(name);
    this.profile.setEmail(email);
  }

  public printProfile() {
    console.log(this.profile.toString());
  }
}

const socialMediaProfile = new SocialMediaProfile();
socialMediaProfile.editProfile('Manuella', 'manu@trybe.com');
socialMediaProfile.printProfile();