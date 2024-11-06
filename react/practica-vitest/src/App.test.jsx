import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";
import { beforeEach, describe, expect } from "vitest";

    describe('App component', ()=> {
        beforeEach(()=>{
            render(<App/>)
        })
        test("Render Button Count", () => {
            const countElement = screen.getByText(/count is/i)
            expect(countElement).toBeDefined()
        })
        
        test("When press button count add one", () => {
            const countElement = screen.getByText(/count is/i)
            fireEvent.click(countElement)
            const number = screen.getByText(/1/i)
            expect (number).toBeDefined()
        })
    })
    
    

