class RealSubject {
    request() {
      return "RealSubject: Handling request.";
    }
  }
  
  class Proxy {
    constructor(realSubject) {
      this.realSubject = realSubject;
    }
  
    request() {
      if (this.checkAccess()) {
        return `${this.realSubject.request()} Proxy: Adding extra behavior.`;
      } else {
        return "Proxy: Access Denied.";
      }
    }
  
    checkAccess() {
      // Simulate an access control
      return true;
    }
  }
  
  // Usage
  const realSubject = new RealSubject();
  const proxy = new Proxy(realSubject);
  
  console.log(proxy.request()); // Access granted with additional behavior
  