import { Car } from "../src/domain/car/Car";

describe("자동차 클래스 테스트", () => {
  test("생성 테스트", () => {
    const car = new Car("BMW");
    expect(car.getName()).toBe("BMW");
    expect(car.getPosition()).toBe(0);
  });

  test("move 테스트", () => {
    const car = new Car("BMW");
    car.moveForward();
    expect(car.getPosition()).toBe(1);
  });
});

describe("자동차 이름 테스트", () => {
  test("이름이 null값일 때 예외 처리", () => {
    expect(() => {
      new Car(null);
    }).toThrow("차 이름이 null값 이거나 빈 값일 수는 없습니다.");
  });

  test("이름이 빈 값일 때 예외 처리", () => {
    expect(() => {
      new Car("");
    }).toThrow("차 이름이 null값 이거나 빈 값일 수는 없습니다.");
  });

  test("이름이 5자 넘었을 경우", () => {
    expect(() => {
      new Car("Volkswagen");
    }).toThrow("차량 이름은 5글자를 초과 할 수 없습니다.");
  });
});
